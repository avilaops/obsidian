export type EventBus = import("./event_utils.js").EventBus;
export type PDFCursorToolsOptions = {
    /**
     * - The document container.
     */
    container: HTMLDivElement;
    /**
     * - The application event bus.
     */
    eventBus: EventBus;
    /**
     * - The cursor tool that will be enabled
     * on load; the constants from {CursorTool} should be used. The default value
     * is `CursorTool.SELECT`.
     */
    cursorToolOnLoad?: number | undefined;
};
/**
 * @typedef {Object} PDFCursorToolsOptions
 * @property {HTMLDivElement} container - The document container.
 * @property {EventBus} eventBus - The application event bus.
 * @property {number} [cursorToolOnLoad] - The cursor tool that will be enabled
 *   on load; the constants from {CursorTool} should be used. The default value
 *   is `CursorTool.SELECT`.
 */
export class PDFCursorTools {
    /**
     * @param {PDFCursorToolsOptions} options
     */
    constructor({ container, eventBus, cursorToolOnLoad }: PDFCursorToolsOptions);
    container: HTMLDivElement;
    eventBus: import("./event_utils.js").EventBus;
    /**
     * @type {number} One of the values in {CursorTool}.
     */
    get activeTool(): number;
    /**
     * @param {number} tool - The cursor mode that should be switched to,
     *                        must be one of the values in {CursorTool}.
     */
    switchTool(tool: number): void;
    /**
     * @private
     */
    private get _handTool();
    #private;
}
