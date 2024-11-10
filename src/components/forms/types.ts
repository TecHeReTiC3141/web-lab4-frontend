export type FormProps<T> = {
    defaultValues: T,
    updateState:  (value: (((prevState: T) => T) | T)) => void
}