let modeGelap = localStorage.getItem('modeGelap');
const pengalihTema = document.getElementById('pengalih-tema');

const aktifkanModeGelap = () => {
  document.body.classList.add('mode-gelap');
  localStorage.setItem('modeGelap', 'aktif');
}

const nonaktifkanModeGelap = () => {
  document.body.classList.remove('mode-gelap');
  localStorage.setItem('modeGelap', null);
}

if (modeGelap === 'aktif') {
  aktifkanModeGelap();
}

pengalihTema.addEventListener('click', () => {
  modeGelap = localStorage.getItem('modeGelap');
  modeGelap !== 'aktif' ? aktifkanModeGelap() : nonaktifkanModeGelap();
});