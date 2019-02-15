import youTubePlayerFactory from 'youtube-player';
import PlayerStates from 'youtube-player/dist/constants/PlayerStates';
import { YouTubePlayer } from 'youtube-player/dist/types';

youTubePlayerFactory('foo');
const player: YouTubePlayer = youTubePlayerFactory(
    document.getElementById('bar'),
    {
        width: 640,
        height: 300,
        videoId: 'aaaaaaaaaa',
        playerVars: {
            autoplay: 1,
            cc_lang_pref: 'en_US',
            cc_load_policy: 1,
            color: 'white',
            controls: 1,
            disablekb: 0,
            enablejsapi: 1,
            end: 60,
            fs: 0,
            hl: 'fooBar',
            iv_load_policy: 3,
            list: 'bbbbbbbbbb',
            listType: 'search',
            loop: 0,
            modestbranding: 1,
            origin: 'https://definitelytyped.org/',
            playlist: 'cccccccccc',
            playsinline: 0,
            rel: 1,
            start: 3,
            widget_referrer: 'nothing',
        },
        events: {
            ready: (event: CustomEvent): void => {},
            stateChange: (event: CustomEvent): void => {
                console.log(player.getPlayerState() === PlayerStates.PLAYING);
            },
            playbackQualityChange: (event: CustomEvent): void => {},
            playbackRateChange: (event: CustomEvent): void => {},
            error: (event: CustomEvent): void => {},
            apiChange: (event: CustomEvent): void => {},
            volumeChange: (event: CustomEvent): void => {},
        },
    },
    true,
);
