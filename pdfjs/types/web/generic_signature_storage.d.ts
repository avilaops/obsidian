export class SignatureStorage {
    constructor(eventBus: any, signal: any);
    getAll(): Promise<null>;
    isFull(): Promise<boolean>;
    size(): Promise<any>;
    create(data: any): Promise<string | null>;
    delete(uuid: any): Promise<boolean>;
    #private;
}
