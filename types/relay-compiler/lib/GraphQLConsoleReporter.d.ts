import { GraphQLReporter } from './GraphQLReporter';

declare class GraphQLMultiReporter implements GraphQLReporter {
    reportMessage(message: string): void;
    reportTime(name: string, ms: number): void;
    reportError(caughtLocation: string, error: Error): void;
}

export = GraphQLMultiReporter;
