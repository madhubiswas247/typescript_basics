class Thing {
    _size = 0;   
    get size(): number {
      return this._size;
    }
    set size(value: string | number | boolean) {
      let num = Number(value);
      // Don't allow NaN, Infinity, etc
      if (!Number.isFinite(num)) {
        this._size = 0;
        return;
      }
      this._size = num;
    }
  }

  //Since TypeScript 4.3, it is possible to have accessors with different types for getting and setting.