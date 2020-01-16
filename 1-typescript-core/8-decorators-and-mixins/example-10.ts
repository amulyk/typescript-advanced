{
    class A {
        a() {
            console.log('a');
        }
    }

    class B {
        b() {
            console.log('b');
        }
    }

    class C implements A, B {
        a() {

        }

        b() {

        }
    }

    applyMixins(C, [A, B]);

    function applyMixins(derivedCtor: any, baseCtors: any[]) {
        baseCtors.forEach(baseCtor => {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
                Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
            });
        });
    }
}