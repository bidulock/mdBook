initSidebarItems({"struct":[["Arg","The abstract representation of a command line argument used by the consumer of the library. Used to set all the options and relationships that define a valid argument for the program.This struct is used by the library consumer and describes the command line arguments for their program. Then evaluates the settings the consumer provided and determines the concret argument type to use when parsing.There are two methods for constructing `Arg`s, using the builder pattern and setting options manually, or using a usage string which is far less verbose. You can also use a combination of the two methods to achieve the best of both worlds.**NOTE*: Fields of this struct are **not** meant to be used directly unless absolutely required. 99.9% of the tasks can be performed without accessing these fields directly.Examples"],["ArgGroup","`ArgGroup`s are a family of related arguments and way for you to say, \"Any of these arguments\". By placing arguments in a logical group, you can make easier requirement and exclusion rules instead of having to list each individually, or when you want a rule to apply \"any but not all\" arguments.For instance, you can make an entire ArgGroup required, this means that one (and *only* one) argument. from that group must be present. Using more than one argument from an ArgGroup causes a failure (graceful exit).You can also do things such as name an ArgGroup as a confliction or requirement, meaning any of the arguments that belong to that group will cause a failure if present, or must present respectively.Perhaps the most common use of `ArgGroup`s is to require one and *only* one argument to be present out of a given set. Imagine that you had multiple arguments, and you want one of them to be required, but making all of them required isn't feasible because perhaps they conflict with each other. For example, lets say that you were building an application where one could set a given version number by supplying a string with an option argument, i.e. `--set-ver v1.2.3`, you also wanted to support automatically using a previous version number and simply incrementing one of the three numbers. So you create three flags `--major`, `--minor`, and `--patch`. All of these arguments shouldn't be used at one time but you want to specify that *at least one* of them is used. For this, you can create a group.Examples"],["ArgMatches","Used to get information about the arguments that where supplied to the program at runtime by the user. To get a new instance of this struct you use `.get_matches()` of the `App` struct.Examples"],["SubCommand","The abstract representation of a command line subcommand used by the consumer of the library.This struct is used by the library consumer and describes all the valid options of the subcommand for their program. SubCommands are treated like \"sub apps\" and contain all the same possibilities (such as their own arguments and subcommands).Examples"]]});