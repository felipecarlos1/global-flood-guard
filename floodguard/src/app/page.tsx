export default function Index(){

  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Bem-vindo ao FloodGuard</h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-8">
        Monitoramento inteligente de enchentes em tempo real. Receba alertas precisos, visualize áreas de risco no mapa e acompanhe o histórico de eventos de forma simples e eficiente.
      </p>
      <a
        href="/mapa"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Iniciar Monitoramento
      </a>
    </section>
  );
}