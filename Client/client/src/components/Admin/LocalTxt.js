const localeTextES = {
  // pagintion
  noRowsLabel: "No hay filas",
  footerRowSelected: (count) =>
    count !== 1 ? `${count.toLocaleString()} filas seleccionadas` : `${count.toLocaleString()} fila seleccionada`,
  footerTotalRows: "Filas Totales:",
  // menu
  columnMenuLabel: "Menú",
  columnMenuShowColumns: "Mostrar columnas",
  columnMenuFilter: "Filtrar",
  columnMenuHideColumn: "Ocultar",
  columnMenuUnsort: "Desordenar",
  columnMenuSortAsc: "Ordenar ASC",
  columnMenuSortDesc: "Ordenar DESC",
  // extra
  toolbarExport: "Exportar",
  toolbarExportCSV: "Descargar como CSV",
};
export default localeTextES;
