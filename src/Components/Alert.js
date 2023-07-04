export default function alert(props) {
    // Function for capitalizing the first letter of props.type.
    const capitalize = (letter) => {
        const lower = letter ? letter.toLowerCase() : ''; // Check if letter is defined before converting to lowercase
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <>
            <div className={`alert alert-${props.alert.type}`} role="alert">
                <strong>{capitalize(props.alert.type)} {props.alert.msg}</strong>
            </div>
        </>
    )
}
