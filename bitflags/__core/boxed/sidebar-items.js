initSidebarItems({"constant":[["HEAP","A value that represents the heap. This is the default place that the `box` keyword allocates into when no place is supplied.The following two examples are equivalent:"]],"struct":[["Box","A pointer type for heap allocation.See the module-level documentation for more."],["ExchangeHeapSingleton","This the singleton type used solely for `boxed::HEAP`."],["IntermediateBox","`IntermediateBox` represents uninitialized backing storage for `Box`.FIXME (pnkfelix): Ideally we would just reuse `Box<T>` instead of introducing a separate `IntermediateBox<T>`; but then you hit issues when you e.g. attempt to destructure an instance of `Box`, since it is a lang item and so it gets special handling by the compiler.  Easier just to make this parallel type for now.FIXME (pnkfelix): Currently the `box` protocol only supports creating instances of sized types. This IntermediateBox is designed to be forward-compatible with a future protocol that supports creating instances of unsized types; that is why the type parameter has the `?Sized` generalization marker, and is also why this carries an explicit size. However, it probably does not need to carry the explicit alignment; that is just a work-around for the fact that the `align_of` intrinsic currently requires the input type to be Sized (which I do not think is strictly necessary)."]],"trait":[["FnBox","`FnBox` is a version of the `FnOnce` intended for use with boxed closure objects. The idea is that where one would normally store a `Box<FnOnce()>` in a data structure, you should use `Box<FnBox()>`. The two traits behave essentially the same, except that a `FnBox` closure can only be called if it is boxed. (Note that `FnBox` may be deprecated in the future if `Box<FnOnce()>` closures become directly usable.)ExampleHere is a snippet of code which creates a hashmap full of boxed once closures and then removes them one by one, calling each closure as it is removed. Note that the type of the closures stored in the map is `Box<FnBox() -> i32>` and not `Box<FnOnce() -> i32>`."]]});