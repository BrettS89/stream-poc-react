export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    height: '100%',
    flex: 1,
    width: '100%',
    backgroundColor: '#f5f5f5'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box' as const,
    padding: 15,
    height: 75,
    backgroundColor: '#fff',
    borderBottom: '1px solid lightgray'
  },
  logoText: {
    fontFamily: 'Russo One',
    fontSize: 24,
    color: '#061726',
    marginLeft: 3,
  },
  main: {
    display: 'flex',
    flexDirection: 'column' as const,
    overflowY: 'scroll' as const,
  },
  channel: {
    display: 'flex',
    backgroundColor: '#f5f5f5',
    minHeight: 150,
    maxHeight: 150,
    borderBottom: '1px solid lightgray',
    // scrollMarginTop: 57,
  },
  channelInfo: {
    minWidth: 150,
    maxWidth: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: '1px solid lightgray'
  },
  shows: {
    width: '100%',
    display: 'flex',
  },
  time: {
    height: 60,
    borderBottom: '1px solid lightgray',
    backgroundColor: '#fff',
    display: 'flex',
    fontSize: 13,
    fontWeight: 700,
  },
  timeLeft: {
    paddingLeft: 15,
    boxSizing: 'border-box' as const,
    minWidth: 150,
    maxWidth: 150,
    display: 'flex',
    alignItems: 'center',
  },
  timeRight: {
    display: 'flex',
    width: '100%'
  },
  timeSection: {
    boxSizing: 'border-box' as const,
    paddingLeft: 15,
    display: 'flex',
    width: 'calc(100% / 3)',
    alignItems: 'center',
    borderLeft: '1px solid lightgray'

  }
};
