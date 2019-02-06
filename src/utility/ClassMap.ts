interface ClassMapPayload {
    [key: string]: boolean;
}

class ClassMap {

    private value: ClassMapPayload = {};

    public constructor(classes: ClassMapPayload) {
        return this.add(classes);
    }

    public add = (classes: ClassMapPayload): ClassMap => {
        this.value = { ...this.value, ...classes };
        return this;
    }

    private classNameReducer = (previous: string[], [ className, addClass ]: any[]): string[] => {
        return addClass ? [ ...previous, className ] : previous;
    }

    public toString = (): string => {
        return [ ...Object.entries(this.value) ].reduce(this.classNameReducer, []).join(' ');
    }

    private fromStringReducer = (previous: ClassMapPayload, str: string): ClassMapPayload => {
        if (str.length) {
            return { ...previous, ...{ [str]: true } };
        }
        return previous;
    }

    public fromString = (str: string): ClassMap => {
        this.add(str.split(' ').reduce(this.fromStringReducer, {}));
        return this;
    }

}

export default ClassMap;
