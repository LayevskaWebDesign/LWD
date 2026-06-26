/* ============================================================
   MUNDO I · RIG DE LUCES (minimalista cinematográfico)
   ============================================================
   La regla cinematográfica: pocas luces, bien colocadas.
   El environment map hace el 70% del trabajo. Las luces
   sumamos solo para EL beat dramático.
   ============================================================ */

export function Lighting() {
  return (
    <>
      {/* Ambiente suave — el cosmos siempre tiene luz residual */}
      <ambientLight intensity={0.25} color="#9CC4D4" />

      {/* Key light dorada suave — la fuente narrativa principal */}
      <directionalLight
        position={[4, 3, 6]}
        intensity={0.9}
        color="#DDC289"
      />

      {/* Rim cyan — separa la esfera del fondo con un toque místico */}
      <directionalLight
        position={[-5, 1, -2]}
        intensity={0.55}
        color="#9CC4D4"
      />
    </>
  );
}
