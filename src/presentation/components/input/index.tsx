interface InputProps {
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export const Input = (props: InputProps) => {
    return (
        <input
            type={props.type}
            className="w-full border border-gray-300 rounded-md px-2 py-1"
            value={props.value}
            onChange={props.onChange}
            required={props.required}
        />
    );
}