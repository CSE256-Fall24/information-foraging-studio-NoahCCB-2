export interface Cache {
    [name: string]: Element;
}
export declare class HTMLLoader {
    static CACHE: Cache;
    static finish(): void;
    static isFinished(): boolean;
    static cacheHTML(name: string, content: string): void;
    static registerPostLoadFunc(func: () => any): void;
    static load(html: string, elem: Element | string): Promise<boolean>;
    static loadURL(url: string, elem: Element | string): Promise<boolean>;
    static getHTML(url: string): Promise<string>;
    private static finished;
    private static postLoadFunc;
    private static removeTagsFromDocumentFragment;
    private static flattenTSLoadTags;
    private static multipleTabs;
    private static flattenTSLoadTag;
    private static getCachedContent;
    private static loadAllCachedElements;
}
//# sourceMappingURL=html_loader.d.ts.map