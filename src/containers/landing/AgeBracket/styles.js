import { AppFonts, AppSizes, AppStyles } from '@theme/';

export default {
  container: {
    ...AppStyles.containerCentered,
    height: AppSizes.screen.heightThird,
    width: AppSizes.screen.width * 0.93,
    backgroundColor: 'green',
    borderRadius: 5,
    marginTop: 7,
    marginBottom: 7,
    alignSelf: 'center'
  },
  image: {
    ...AppStyles.containerCentered,
    height: AppSizes.screen.heightThird,
    borderRadius: 5,
    width: AppSizes.screen.width * 0.93,    
  }, 
  overlay: {
    height: AppSizes.screen.heightThird,
    borderRadius: 5,
    width: AppSizes.screen.width * 0.93,    
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 30
  },
  label: {
    fontSize: 30,
    color: '#36BA8A'
  },
  age: {
    color: 'lightgray',
    fontSize: 15
  }
}