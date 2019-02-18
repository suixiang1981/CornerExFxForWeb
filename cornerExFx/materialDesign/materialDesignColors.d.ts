declare class MaterialDesignColors {
    static readonly drakColor: string;
    static readonly lightColor: string;
    static readonly drakDisabledBackgroundColor: string;
    static readonly lightDisabledBackgroundColor: string;
    static readonly drakDisabledColor: string;
    static readonly lightDisabledColor: string;
    static readonly transparentColor: string;
    static getColor(hue: MaterialDesignHue, shade: MaterialDesignShade): string;
}
declare enum MaterialDesignHue {
    Red = 0,
    Pink = 1,
    Purple = 2,
    DeepPurple = 3,
    Indigo = 4,
    Blue = 5,
    LightBlue = 6,
    Cyan = 7,
    Teal = 8,
    Green = 9,
    LightGreen = 10,
    Lime = 11,
    Yellow = 12,
    Amber = 13,
    Orange = 14,
    DeepOrange = 15,
    Brown = 16,
    Grey = 17,
    BlueGrey = 18
}
declare enum MaterialDesignShade {
    S50 = 0,
    S100 = 1,
    S200 = 2,
    S300 = 3,
    S400 = 4,
    S500 = 5,
    S600 = 6,
    S700 = 7,
    S800 = 8,
    S900 = 9,
    A100 = 10,
    A200 = 11,
    A400 = 12,
    A700 = 13
}
