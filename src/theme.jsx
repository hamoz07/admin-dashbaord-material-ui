export const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {

          }
        : {
            
          }
        ),
    },
  });
  