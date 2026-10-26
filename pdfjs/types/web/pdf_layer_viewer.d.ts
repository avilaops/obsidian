export type EventBus = import("./event_utils.js").EventBus;
export type OptionalContentConfig = any;
export type PDFDocumentProxy = import("../src/display/api.js").PDFDocumentProxy;
export type PDFLayerViewerOptions = {
    /**
     * - The viewer element.
     */
    container: HTMLDivElement;
    /**
     * - The application event bus.
     */
    eventBus: EventBus;
};
export type PDFLayerViewerRenderParameters = {
    /**
     * - An
     * {OptionalContentConfig} instance.
     */
    optionalContentConfig: OptionalContentConfig | null;
    /**
     * - A {PDFDocument} instance.
     */
    pdfDocument: PDFDocumentProxy;
};
/**
 * @typedef {Object} PDFLayerViewerOptions
 * @property {HTMLDivElement} container - The viewer element.
 * @property {EventBus} eventBus - The application event bus.
 */
/**
 * @typedef {Object} PDFLayerViewerRenderParameters
 * @property {OptionalContentConfig|null} optionalContentConfig - An
 *   {OptionalContentConfig} instance.
 * @property {PDFDocumentProxy} pdfDocument - A {PDFDocument} instance.
 */
export class PDFLayerViewer extends BaseTreeViewer {
    _optionalContentConfig: any;
    _optionalContentVisibility: Map<any, any> | null | undefined;
    /**
     * @protected
     */
    protected _bindLink(element: any, { groupId, input }: {
        groupId: any;
        input: any;
    }): void;
    /**
     * @private
     */
    private _setNestedName;
    /**
     * @protected
     */
    protected _addToggleButton(div: any, { name }: {
        name?: null | undefined;
    }): void;
    /**
     * @param {PDFLayerViewerRenderParameters} params
     */
    renderTree({ optionalContentConfig, pdfDocument }: PDFLayerViewerRenderParameters): void;
    #private;
}
import { BaseTreeViewer } from "./base_tree_viewer.js";
