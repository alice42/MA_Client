export default theme => ({
  select: {
    background: 'unset',
    border: 'none',
    outline: 'none'
    // width: '100%'
  },
  selectMobile: {
    background: 'unset',
    border: 'none',
    outline: 'none',
    width: '18px'
  },
  select: {
    display: 'grid',
    gridTemplateAreas: 'select',
    alignItems: 'center',
    position: 'relative',
    '&after': {
      gridArea: 'select'
    },

    minWidth: '15ch',
    maxWidth: '30ch',

    border: ' 1px solid red',
    borderRadius: '0.25em',
    padding: '0.25em 0.5em',

    fontSize: '1.25rem',
    cursor: 'pointer',
    lineHeight: '1.1',

    // Optional styles
    // remove for transparency
    backgroundColor: '#fff',
    backgroundImage: 'linear-gradient(to top, #f9f9f9, #fff 33%)',

    // Custom arrow
    '&::not(.select--multiple)::after': {
      content: '"ddkd"',
      justifySelf: 'end',
      width: '0.8em',
      height: '0.5em',
      backgroundColor: 'blue',
      clipPath: ' polygon(100% 0%, 0 0%, 50% 100%)'
    }
  }
})
