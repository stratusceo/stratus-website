import Head from "next/head"

export default function Legal() {
    return (
        <>
            <Head>
                <title>STRATUS - Legal</title>
                <link rel="shortcut icon" href="/static/favicon.ico" />

                <meta name="description" content="Our legal terms." />
                <meta property="og:description" content="Our legal terms." />
                <meta property="twitter:description" content="Our legal terms." />
            </Head>

            <section className="legal">
                <h2 className="margin-20">CREDITS</h2>

                <div className="margin-20">
                    <p>
                        Mockups are made by {' '}
                        <a href="https://www.anthonyboyd.graphics/" target="_blank" rel="noopener noreferrer"><u>Anthony Boyd</u></a> {' '}
                        and <a href="https://www.behance.net/AlekseyBelorukov" target="_blank" rel="noopener noreferrer"><u>Aleksey Belorukov</u></a> {' '}
                        and <a href="https://www.ls.graphics/">ls.graphics</a>.
                    </p>

                    <p>
                        Icons are coming from {' '}
                        <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer"><u>Flaticon</u></a>.
                    </p>
                </div>

                <h2 className="margin-20">LEGAL</h2>

                <div>
                    <p>Company Name: STRATUS</p>
                    <p>Address: STRATUS, 1079 ROUTE DU DOC DAVY, 74480 PASSY</p>
                    <p>Phone Number: 00 33 6 52 71 40 95</p>
                    <p>Email: contact@stratusagency.io</p>
                    <p>Publisher: DE MAUPEOU D{"'"}ABLEIGES DE MONBAIL Corentin</p>
                    <p>Identification Number: Unknown VAT number or structure not subject to VAT</p>
                    <p>APE: 62.01Z - Computer Programming</p>
                    <p>Registered with the Trade and Companies Register of ANNECY under number 948540927 00019</p>
                    <p>Share capital: 1 000 € (EUR)</p>
                </div>

                <h2 className="margin-20">HOST</h2>

                <div>
                    <p>LWS (Ligne Web Services)</p>
                    <p>4 rue Galvani</p>
                    <p>75838 Paris Cedex 17</p>
                    <p>Phone Number: +33 1 77 62 30 03</p>
                    <p>Email: support@lws.fr</p>
                    <p>Registered with the Trade and Companies Register of Paris under number 45045388100010</p>
                    <p>Share capital: 1,000,000 €</p>
                    <p>Credits:</p>
                    <p>The website was created by DE MAUPEOU D{"'"}ABLEIGES DE MONBAIL Corentin</p>
                </div>
            </section>
        </>
    )
}