document.addEventListener('DOMContentLoaded', function () {
    const audioTracks = document.querySelectorAll('audio');

    audioTracks.forEach(track => {
        const trackId = track.id;
        const volumeControl = document.querySelector(`#volume${trackId.replace('track', '')}`);

        if (track && volumeControl) {
            // Sincroniza o valor do slider com o volume atual do áudio
            volumeControl.value = track.volume;

            // Atualiza o volume do áudio quando o slider é alterado
            volumeControl.addEventListener('input', function () {
                try {
                    track.volume = parseFloat(volumeControl.value);
                    console.log(`Volume da ${trackId} ajustado para: ${track.volume}`);
                } catch (error) {
                    console.error(`Erro ao ajustar o volume de ${trackId}:`, error);
                }
            });

            // Força a ativação do controle de volume no celular
            track.addEventListener('play', function () {
                track.volume = parseFloat(volumeControl.value);
            });
        } else {
            console.error(`Controle de volume não encontrado para o áudio com ID: ${trackId}`);
        }
    });
});
