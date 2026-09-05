/**
 * Liquid Fusion Wave Canvas Engine
 * High-DPI compound sinusoidal wave simulation in warm espresso & alabaster cream
 */
export function initEspressoWhiteWaveCanvas(canvasId = 'wave-canvas') {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let time = 0;

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        ctx.scale(dpr, dpr);
    }

    window.addEventListener('resize', resize);
    resize();

    // Multi-layered Molten Liquid Strata
    const waveStrata = [
        // Deepest Foundation: Rich Dark Chocolate / Espresso
        {
            baseRatio: 0.52,
            amp1: 165,
            amp2: 85,
            freq1: 0.00065,
            freq2: 0.00032,
            speed: 0.0020,
            phase: 0.0,
            topColor: 'rgba(26, 18, 14, 0.98)',
            bottomColor: 'rgba(18, 12, 9, 1.0)'
        },
        // Mid-Dark: Roasted Coffee / Warm Mocha
        {
            baseRatio: 0.44,
            amp1: 185,
            amp2: 95,
            freq1: 0.00055,
            freq2: 0.00028,
            speed: 0.0017,
            phase: 2.1,
            topColor: 'rgba(54, 36, 26, 0.85)',
            bottomColor: 'rgba(30, 20, 15, 0.95)'
        },
        // Fusion Layer: Warm Amber Toffee / Cocoa
        {
            baseRatio: 0.36,
            amp1: 205,
            amp2: 110,
            freq1: 0.00048,
            freq2: 0.00025,
            speed: 0.0019,
            phase: 4.2,
            topColor: 'rgba(110, 75, 56, 0.65)',
            bottomColor: 'rgba(65, 44, 32, 0.85)'
        },
        // Transition Kiss: Sütlü Kahve / Karamel
        {
            baseRatio: 0.28,
            amp1: 225,
            amp2: 120,
            freq1: 0.00042,
            freq2: 0.00022,
            speed: 0.0016,
            phase: 1.4,
            topColor: 'rgba(185, 145, 122, 0.45)',
            bottomColor: 'rgba(120, 85, 66, 0.60)'
        },
        // Soft Cream Melting into Pure White
        {
            baseRatio: 0.20,
            amp1: 245,
            amp2: 130,
            freq1: 0.00038,
            freq2: 0.00020,
            speed: 0.0014,
            phase: 3.5,
            topColor: 'rgba(240, 222, 210, 0.35)',
            bottomColor: 'rgba(195, 160, 138, 0.40)'
        }
    ];

    function render() {
        time += 2.2;
        ctx.clearRect(0, 0, width, height);

        // Top Base: Pristine Warm Cream-White
        const whiteGrad = ctx.createLinearGradient(0, 0, 0, height * 0.45);
        whiteGrad.addColorStop(0, '#FFFFFF');
        whiteGrad.addColorStop(0.6, '#FAF7F3');
        whiteGrad.addColorStop(1, '#F3EBE3');
        ctx.fillStyle = whiteGrad;
        ctx.fillRect(0, 0, width, height);

        // Render each progressive liquid wave stratum
        for (let i = waveStrata.length - 1; i >= 0; i--) {
            const s = waveStrata[i];
            const baseY = height * s.baseRatio;

            ctx.beginPath();
            ctx.moveTo(0, height);
            ctx.lineTo(0, baseY);

            const step = 4;
            for (let x = 0; x <= width + step; x += step) {
                const wave1 = Math.sin(x * s.freq1 + time * s.speed + s.phase) * s.amp1;
                const wave2 = Math.cos(x * s.freq2 - time * (s.speed * 0.7) + s.phase * 1.4) * s.amp2;
                const wave3 = Math.sin(x * 0.00018 + time * 0.0003) * 42;
                const y = baseY + wave1 + wave2 + wave3;
                ctx.lineTo(x, y);
            }

            ctx.lineTo(width, height);
            ctx.closePath();

            const grad = ctx.createLinearGradient(0, baseY - s.amp1, 0, height);
            grad.addColorStop(0, s.topColor);
            grad.addColorStop(0.7, s.bottomColor);
            grad.addColorStop(1, s.bottomColor);

            ctx.fillStyle = grad;
            ctx.fill();
        }

        // Slow-drifting ambient light core for luminous liquid depth
        const lightX = width * (0.45 + 0.25 * Math.sin(time * 0.0004));
        const lightY = height * (0.35 + 0.15 * Math.cos(time * 0.0003));
        const lightGrad = ctx.createRadialGradient(lightX, lightY, 20, lightX, lightY, Math.min(width, height) * 0.6);
        lightGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
        lightGrad.addColorStop(0.5, 'rgba(254, 245, 238, 0.15)');
        lightGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = lightGrad;
        ctx.fillRect(0, 0, width, height);

        requestAnimationFrame(render);
    }

    render();
}
