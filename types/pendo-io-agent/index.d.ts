// Type definitions for Pendo.io Agent 2.16
// Project: https://www.pendo.io/
// Definitions by: Aaron Beall <https://github.com/aaronbeall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace pendo {
    interface Identity {
        visitor: Visitor;
        account?: Account;
    }

    type Metadata = Record<string, string | number | undefined>;

    interface Visitor extends Metadata {
        id: string;
    }

    interface Account extends Metadata {
        id?: string;
    }

    interface InitOptions extends Identity {
        apiKey?: string;
        excludeAllText?: boolean;
        excludeTitle?: boolean;
        disablePersistence?: boolean;
        guides?: {
            delay?: boolean;
            disable?: boolean;
            timeout?: number;
            tooltip?: {
                arrowSize?: number;
            }
        };
        events?: EventCallbacks;
    }

    interface EventCallbacks {
        ready?(): void;
        guidesLoaded?(): void;
        guidesFailed?(): void;
    }

    interface Pendo {
        // Initialization and Identification
        initialize(options: InitOptions): void;
        identify(visitorId: string, accountId?: string): void;
        identify(identity: Identity): void;
        isReady(): boolean;
        flushNow(): Promise<any>;
        updateOptions(visitorMetadata: Metadata): void;
        getVersion(): string;
        getVisitorId(): string;
        getAccountId(): string;
        getCurrentUrl(): string;

        // Guides and Guide Center
        findGuideByName(name: string): Guide | void;
        findGuideById(id: string): Guide | void;
        showGuideByName(name: string): void;
        showGuideById(id: string): void;
        toggleLauncher(): void;
        removeLauncher(): void;

        // Troubleshooting
        loadGuides(): void;
        startGuides(): void;
        stopGuides(): void;

        // Debugging
        enableDebugging(): void;
        disableDebugging(): void;
        isDebuggingEnabled(coerce?: false): "Yes" | "No";
        isDebuggingEnabled(coerce: true): boolean;
        debugging: Debugging;

        // Events
        events: Events;
        track(trackType: string, metadata?: Metadata): void;

        // Guide Events
        onGuideAdvanced(step?: GuideStep): void;
        onGuideAdvanced(steps: { steps: number }): void;
        onGuidePrevious(step?: GuideStep): void;
        onGuideDismissed(step?: GuideStep): void;
        onGuideDismissed(until: { until: "reload" }): void;

        // Other
        validateInstall(): void;
        dom(input: any): HTMLElement; // TODO
    }

    interface Debugging {
        getEventCache(): any[]; // TODO
        getAllGuides(): Guide[];
        getAutoGuides(): { auto: Guide[]; override: Guide[] };
        getBadgeGuides(): Guide[];
        getLauncherGuides(): Guide[];
    }

    type Events = {
        [K in keyof EventCallbacks]-?: (callback: EventCallbacks[K]) => Events;
    };

    interface Guide {
        createdByUser: User;
        createdAt: number;
        lastUpdatedByUser: User;
        lastUpdatedAt: number;
        kind: string;
        rootVersionId: string;
        stableVersionId: string;
        id: string;
        name: string;
        state: "published" | "staged" | "draft" | "disabled";
        launchMethod: "api" | "automatic" | "badge" | "dom" | "launcher";
        isMultiStep: boolean;
        steps: GuideStep[];
        attributes: {
            type: string;
            device: { desktop: boolean; mobile: boolean; type: "desktop" | "mobile" };
            badge: any;
            priority: number;
            launcher: { keywords: string[] };
        };
        audience: any[]; // TODO
        audienceUiHint: { filters: any[] }; // TODO
        resetAt: number;
        publishedAt: number;
    }

    interface User {
        id: string;
        username: string;
        first: string;
        last: string;
        role: number;
        userType: string;
    }

    interface GuideStep {
        id: string;
        guideId: string;
        type: string;
        elementPathRule: string;
        contentType: string;
        contentUrl?: string;
        contentUrlCss?: string;
        contentUrlJs?: string;
        rank: number;
        advanceMethod: "button" | "programatic" /* sic */ | "element";
        thumbnailUrls?: string;
        attributes: {
            height: number;
            width: number;
            autoHeight: boolean;
            position: string;
            css: string;
            variables: any;
        };
        lastUpdatedAt: number;
        resetAt: number;
    }
}

declare const pendo: pendo.Pendo;
