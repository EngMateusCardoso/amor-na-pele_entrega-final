import React from "react";


export default () => {
    return (
        <section class="container px-4 py-5 mt-2" id="icon-grid">
            <h2 class="pb-2 border-bottom align-items-center">
                Números Importantes
            </h2>
            <div class="row g-4 py-5">
                <div class="col-md-6 col-lg-3 p-5 rounded-3 shadow-sm d-flex flex-column">
                    <div>
                        <p>Acolhimentos</p>
                        <h4 class="fw-bold mb-0">32</h4>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 p-5 rounded-3 shadow-sm d-flex flex-column">
                    <div>
                        <p>Tratamentos Psicológicos</p>
                        <h4 class="fw-bold mb-0">22</h4>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 p-5 rounded-3 shadow-sm d-flex flex-column">
                    <div>
                        <p>Tratamentos Estéticos</p>
                        <h4 class="fw-bold mb-0">14</h4>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 p-5 rounded-3 shadow-sm d-flex flex-column">
                    <div>
                        <p>Cirurgias</p>
                        <h4 class="fw-bold mb-0">8</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}