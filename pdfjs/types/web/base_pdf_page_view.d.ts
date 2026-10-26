export class BasePDFPageView {
    constructor(options: any);
    /** @type {null | HTMLCanvasElement} */
    canvas: null | HTMLCanvasElement;
    /** @type {null | HTMLDivElement} */
    div: null | HTMLDivElement;
    eventBus: null;
    id: null;
    pageColors: null;
    renderingQueue: null;
    renderTask: null;
    resume: null;
    set renderingState(state: number);
    get renderingState(): number;
    _createCanvas(onShow: any, hideUntilComplete?: boolean): {
        canvas: HTMLCanvasElement;
        prevCanvas: HTMLCanvasElement | null;
        ctx: CanvasRenderingContext2D | null;
    };
    _resetCanvas(): void;
    _drawCanvas(options: any, onCancel: any, onFinish: any): Promise<void>;
    cancelRendering({ cancelExtraDelay }?: {
        cancelExtraDelay?: number | undefined;
    }): void;
    dispatchPageRender(): void;
    dispatchPageRendered(cssTransform: any, isDetailView: any): void;
    #private;
}
