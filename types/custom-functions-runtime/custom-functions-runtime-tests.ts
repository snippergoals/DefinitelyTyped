/* Note that this is a sample function for the purpose of running the below CustomFunctionsMappings test */
function ADD10(n: number) {
    return n + 10;
}

CustomFunctionMappings = {
    addTen: ADD10
};

async function getStockValues(ticker: string): Promise<number> {
    const response = await fetch(`myService.com/prices/${ticker}`);
    return (await response.json())['price'];
}

async function getStockValuesCancellable(
    ticker: string,
    handler: CustomFunctions.CancelableHandler
): Promise<number> {
    let shouldStop = false;
    handler.onCanceled = () => (shouldStop = true);
    await pause(1000);

    if (shouldStop) {
        return null;
    }

    const response = await fetch(`myService.com/prices/${ticker}`);
    return (await response.json())['price'];
}

async function stockPriceStream(
    ticker: string,
    handler: CustomFunctions.StreamingHandler<number>
) {
    var updateFrequency = 10 /* milliseconds*/;
    var isPending = false;

    var timer = setInterval(function() {
        // If there is already a pending request, skip this iteration:
        if (isPending) {
            return;
        }

        var url = `myService.com/prices/${ticker}`;
        isPending = true;

        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                handler.setResult(data.price);
            })
            .catch(function(error) {
                handler.setResult(new Error(error));
            })
            .then(function() {
                isPending = false;
            });
    }, updateFrequency);

    handler.onCanceled = () => {
        clearInterval(timer);
    };
}

declare function pause(ms: number): Promise<void>;
