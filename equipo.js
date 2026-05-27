  function toggleEquipo(el) {
            const estaAbierto = el.classList.contains('abierto');
            // Cerrar todos
            document.querySelectorAll('.equipo-item.abierto').forEach(item => item.classList.remove('abierto'));
            // Abrir el clicado si estaba cerrado
            if (!estaAbierto) el.classList.add('abierto');
        }