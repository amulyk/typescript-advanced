{
    class A2 {
        name: string;

        a() {
            console.log('a');
        }
    }

    class B2 {
        b() {
            console.log('b');
        }
    }

    class C2 implements A2, B2 {
        name: string;

        a() {

        }

        b() {

        }
    }

    applyMixins(C2, [A2, B2]);

    function applyMixins(derivedCtor: any, baseCtors: any[]) {
        baseCtors.forEach(baseCtor => {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
                Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
            });
        });
    }
}