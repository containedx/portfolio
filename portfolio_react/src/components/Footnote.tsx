import Typewriter from "./Typewriter";

const thankyounote : string = 
"The End ✨ hope you enjoyed! ";


const Footnote : React.FC = () => {
    return (
        <section
            style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                marginTop: "40vh"
            }}>
            <h2 style={{ width: "80vw", maxWidth: "300px" }}>
                <Typewriter text={thankyounote} ></Typewriter>
            </h2>
        </section>
    );
}

export default Footnote;