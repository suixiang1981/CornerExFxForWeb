declare class MaterialDesignImages {
    private static basePath;
    static getImage(image: MaterialDesignImageName, isDark?: boolean, hue?: MaterialDesignHue): string;
}
declare enum MaterialDesignImageName {
    Null = 0,
    Check = 1,
    Indeterminate = 2,
    Halo = 3
}
