export default function FormatNumber(value) {
  return new Intl.NumberFormat('de-DE').format(
    parseInt(value) === 'Nan' ? 0 : parseInt(value),
  );
};