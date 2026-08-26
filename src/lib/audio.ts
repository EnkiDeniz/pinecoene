let audioContext: AudioContext | undefined;

export function playOpeningTone() {
  if (typeof window === "undefined") return;
  audioContext ??= new AudioContext();
  const context = audioContext;
  const now = context.currentTime;
  const master = context.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.045, now + 0.08);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 5.8);
  master.connect(context.destination);

  [146.83, 220, 293.66].forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = index === 0 ? "sine" : "triangle";
    oscillator.frequency.setValueAtTime(frequency, now);
    oscillator.detune.setValueAtTime(index * 3.5, now);
    gain.gain.setValueAtTime(0.0001, now + index * 0.45);
    gain.gain.exponentialRampToValueAtTime(0.36 / (index + 1), now + 0.8 + index * 0.45);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.8 + index * 0.35);
    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start(now + index * 0.45);
    oscillator.stop(now + 6);
  });
}
