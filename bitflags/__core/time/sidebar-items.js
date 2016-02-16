initSidebarItems({"constant":[["UNIX_EPOCH","An anchor in time which can be used to create new `SystemTime` instances or learn about where in time a `SystemTime` lies.This constant is defined to be \"1970-01-01 00:00:00 UTC\" on all systems with respect to the system clock. Using `duration_from_earlier` on an existing `SystemTime` instance can tell how far away from this point in time a measurement lies, and using `UNIX_EPOCH + duration` can be used to create a `SystemTime` instance to represent another fixed point in time."]],"struct":[["Duration","A duration type to represent a span of time, typically used for system timeouts.Each duration is composed of a number of seconds and nanosecond precision. APIs binding a system timeout will typically round up the nanosecond precision if the underlying system does not support that level of precision.Durations implement many common traits, including `Add`, `Sub`, and other ops traits. Currently a duration may only be inspected for its number of seconds and its nanosecond precision.Examples"],["Instant","A measurement of a monotonically increasing clock.  Opaque and useful only with `Duration`.Instants are always guaranteed to be greater than any previously measured instant when created, and are often useful for tasks such as measuring benchmarks or timing how long an operation takes.Note, however, that instants are not guaranteed to be **steady**.  In other words, each tick of the underlying clock may not be the same length (e.g. some seconds may be longer than others). An instant may jump forwards or experience time dilation (slow down or speed up), but it will never go backwards.Instants are opaque types that can only be compared to one another. There is no method to get \"the number of seconds\" from an instant. Instead, it only allows measuring the duration between two instants (or comparing two instants)."],["SystemTime","A measurement of the system clock, useful for talking to external entities like the file system or other processes.Distinct from the `Instant` type, this time measurement **is not monotonic**. This means that you can save a file to the file system, then save another file to the file system, **and the second file has a `SystemTime` measurement earlier than the second**. In other words, an operation that happens after another operation in real time may have an earlier `SystemTime`!Consequently, comparing two `SystemTime` instances to learn about the duration between them returns a `Result` instead of an infallible `Duration` to indicate that this sort of time drift may happen and needs to be handled.Although a `SystemTime` cannot be directly inspected, the `UNIX_EPOCH` constant is provided in this module as an anchor in time to learn information about a `SystemTime`. By calculating the duration from this fixed point in time, a `SystemTime` can be converted to a human-readable time, or perhaps some other string representation."],["SystemTimeError","An error returned from the `duration_from_earlier` method on `SystemTime`, used to learn about why how far in the opposite direction a timestamp lies."]]});