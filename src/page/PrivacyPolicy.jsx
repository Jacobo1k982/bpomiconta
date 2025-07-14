import React from "react";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 py-12">
            <Helmet>
                <title>Política de Privacidad | [Nombre de tu Empresa]</title>
                <meta
                    name="description"
                    content="Política de Privacidad de [Nombre de tu Empresa]. Conoce cómo protegemos tus datos personales."
                />
            </Helmet>

            <h1 className="text-3xl font-bold text-gray-800 mb-6">Política de Privacidad</h1>
            <p className="text-gray-600 mb-8">Última actualización: [Fecha]</p>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-3">1. Información que Recopilamos</h2>
                <p className="text-gray-600 mb-4">
                    En [Nombre de tu Empresa], recopilamos información personal que nos proporcionas voluntariamente, como:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Nombre completo y datos de contacto (email, teléfono)</li>
                    <li>Información de facturación (para servicios de pago)</li>
                    <li>Datos de navegación (cookies, dirección IP)</li>
                    <li>Información de transacciones comerciales</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-3">2. Uso de la Información</h2>
                <p className="text-gray-600">
                    Utilizamos tus datos para:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-2">
                    <li>Proveer nuestros servicios y procesar transacciones</li>
                    <li>Mejorar la experiencia del usuario</li>
                    <li>Comunicaciones comerciales legítimas</li>
                    <li>Cumplir con obligaciones legales</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-3">3. Compartir Información</h2>
                <p className="text-gray-600">
                    No vendemos tus datos. Podemos compartir información con:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-2">
                    <li>Proveedores de servicios necesarios (ej: procesadores de pago)</li>
                    <li>Autoridades cuando lo exija la ley</li>
                    <li>Socios comerciales en acuerdos de confidencialidad</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-3">4. Derechos del Usuario</h2>
                <p className="text-gray-600 mb-2">
                    Tienes derecho a:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Acceder, rectificar o eliminar tus datos</li>
                    <li>Oponerte al procesamiento de tus datos</li>
                    <li>Solicitar la portabilidad de tus datos</li>
                    <li>Retirar consentimiento en cualquier momento</li>
                </ul>
                <p className="text-gray-600 mt-4">
                    Para ejercer estos derechos, contáctanos en: <a href="mailto:privacidad@tudominio.com" className="text-blue-500">privacidad@tudominio.com</a>
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-3">5. Seguridad de Datos</h2>
                <p className="text-gray-600">
                    Implementamos medidas técnicas y organizativas para proteger tu información, incluyendo:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-2">
                    <li>Encriptación de datos sensibles</li>
                    <li>Accesos restringidos al personal autorizado</li>
                    <li>Revisiones periódicas de seguridad</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-3">6. Cookies y Tecnologías Similares</h2>
                <p className="text-gray-600">
                    Utilizamos cookies para:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-2">
                    <li>Funcionalidad básica del sitio</li>
                    <li>Análisis de tráfico (Google Analytics)</li>
                    <li>Personalización de contenido</li>
                </ul>
                <p className="text-gray-600 mt-4">
                    Puedes gestionar tus preferencias de cookies en la configuración de tu navegador.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-3">7. Cambios en esta Política</h2>
                <p className="text-gray-600">
                    Actualizaremos esta política cuando sea necesario. Te notificaremos sobre cambios significativos.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-700 mb-3">8. Contacto</h2>
                <p className="text-gray-600">
                    Para preguntas sobre privacidad: <br />
                    Email: <a href="mailto:privacidad@tudominio.com" className="text-blue-500">privacidad@tudominio.com</a><br />
                    Dirección: [Dirección física de tu empresa, si aplica]
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;