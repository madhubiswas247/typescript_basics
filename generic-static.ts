class Box2<Type> {
    static defaultValue: Type;
  //Static members cannot reference class type parameters.
  }

  /*
  Remember that types are always fully erased! At runtime, 
  there’s only one Box.defaultValue property slot. This means that 
  setting Box<string>.defaultValue (if that were possible) would also 
  change Box<number>.defaultValue - not good.
   The static members of a generic class can never refer to the class’s type parameters.
  */