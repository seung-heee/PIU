

export default function Section({ id, color, children }) {

    return (
        <section id={id}>
            {children}
        </section>
    );
}
