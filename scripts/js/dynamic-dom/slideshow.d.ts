export declare class Slideshow {
    private outer;
    static setupAll(): void;
    static discardAll(): void;
    private static slideshows;
    private slideIndex;
    private slideCount;
    private slides;
    private dots;
    constructor(outer: Element);
    plusSlide(n: number): void;
    minusSlide(n: number): void;
    showSlide(index: number): void;
}
//# sourceMappingURL=slideshow.d.ts.map