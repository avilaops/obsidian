export class IPDFFindBar {
    opened: boolean;
    reset(): void;
    open(): void;
    close(): void;
    updateResultsCount({ current, total }?: {
        current?: number | undefined;
        total?: number | undefined;
    }): void;
    updateUIState(state: any, previous: any, matchesCount: any): void;
    showSearch(): void;
}
/**
 * Creates a "search bar" given a set of DOM elements that act as controls
 * for searching or for setting search preferences in the UI. This object
 * also sets up the appropriate events for the controls. Actual searching
 * is done by PDFFindController.
 */
export class PDFFindBar extends IPDFFindBar {
    constructor(options: any, mainContainer: any, eventBus: any);
    bar: any;
    toggleButton: any;
    findField: any;
    highlightAll: any;
    caseSensitive: any;
    matchDiacritics: any;
    entireWord: any;
    findMsg: any;
    findResultsCount: any;
    findPreviousButton: any;
    findNextButton: any;
    eventBus: any;
    dispatchEvent(type: any, findPrev?: boolean): void;
    toggle(): void;
    #private;
}
