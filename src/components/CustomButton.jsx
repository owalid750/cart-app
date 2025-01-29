
import "./CustomButton.css"
export function CustomButton({ text, className, onClick }) {
    return (
        <button  className={className} onClick={onClick}>{text}</button>
    )
}