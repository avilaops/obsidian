export type EventBus = import("./event_utils.js").EventBus;
export type AnnotationEditorParamsOptions = {
    editorFreeTextFontSize: HTMLInputElement;
    editorFreeTextColor: HTMLInputElement;
    editorInkColor: HTMLInputElement;
    editorInkThickness: HTMLInputElement;
    editorInkOpacity: HTMLInputElement;
    editorStampAddImage: HTMLButtonElement;
    editorFreeHighlightThickness: HTMLInputElement;
    editorHighlightShowAll: HTMLButtonElement;
    editorSignatureAddSignature: HTMLButtonElement;
};
/**
 * @typedef {Object} AnnotationEditorParamsOptions
 * @property {HTMLInputElement} editorFreeTextFontSize
 * @property {HTMLInputElement} editorFreeTextColor
 * @property {HTMLInputElement} editorInkColor
 * @property {HTMLInputElement} editorInkThickness
 * @property {HTMLInputElement} editorInkOpacity
 * @property {HTMLButtonElement} editorStampAddImage
 * @property {HTMLInputElement} editorFreeHighlightThickness
 * @property {HTMLButtonElement} editorHighlightShowAll
 * @property {HTMLButtonElement} editorSignatureAddSignature
 */
export class AnnotationEditorParams {
    /**
     * @param {AnnotationEditorParamsOptions} options
     * @param {EventBus} eventBus
     */
    constructor(options: AnnotationEditorParamsOptions, eventBus: EventBus);
    eventBus: import("./event_utils.js").EventBus;
    #private;
}
