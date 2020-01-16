{
    const create = function <T>(Entity: {new(): T; }): T {
        return new Entity();
    }
}