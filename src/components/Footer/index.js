export default function Footer() {
    var anoAtual = new Date().getFullYear();

    return (
        <>
            <div className="container d-flex flex-column mt-5">
                <div className="mt-auto d-flex align-items-center justify-content-between text-secondary border-top border-dark-subtle fs-6 mx-5 mb-2 pt-3 footer">
                    <div>© {anoAtual} MJA Instalações</div>
                    <div>Desenvolvido por <a className="text-info-emphasis link-underline link-underline-opacity-0" target="_blank" href="https://github.com/matheusg1">Matheus G.</a>
                    </div>
                </div>
            </div>
        </>
    )
}