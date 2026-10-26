export type IL10n = import("./interfaces.js").IL10n;
/** @typedef {import("./interfaces.js").IL10n} IL10n */
export class BaseExternalServices {
    updateFindControlState(data: any): void;
    updateFindMatchesCount(data: any): void;
    initPassiveLoading(): void;
    reportTelemetry(data: any): void;
    /**
     * @returns {Promise<IL10n>}
     */
    createL10n(): Promise<IL10n>;
    createScripting(): void;
    createSignatureStorage(): void;
    updateEditorStates(data: any): void;
    dispatchGlobalEvent(_event: any): void;
}
