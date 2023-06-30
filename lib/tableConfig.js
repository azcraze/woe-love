const config = {
  drawVerticalLine: (lineIndex) => {
    return (
      1 === lineIndex || 0 === lineIndex || 3 === lineIndex || 4 === lineIndex
    );
  },
  drawHorizontalLine: (lineIndex, rowCount) => {
    return 0 === lineIndex || 1 === lineIndex || lineIndex === rowCount;
  },
  spanningCells: [
    {
      col: 0,
      row: 0,
      colSpan: 4,
    },
  ],
  border: {
    topBody: `═`,
    topJoin: `─`,
    topLeft: `╔`,
    topRight: `╗`,

    bottomBody: `═`,
    bottomJoin: `═`,
    bottomLeft: `╚`,
    bottomRight: `╝`,

    bodyLeft: `║`,
    bodyRight: `║`,
    bodyJoin: ` `,

    joinBody: `─`,
    joinLeft: `╟`,
    joinRight: `╢`,
    joinJoin: ` `,
  },
  columns: [
    { alignment: "center" },
    { alignment: "right" },
    { alignment: "left" },
    { alignment: "right" },
  ],
  columnDefault: {
    width: 6,
  },
};

module.exports = { config };
