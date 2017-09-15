import { AppColors, AppSizes, AppStyles } from '@theme/';

export default {
  container: { flex: 1, flexWrap: 'wrap', flexDirection: 'row', },
  innerContainer: {
    ...AppStyles.containerCentered,
    height: AppSizes.screen.height * 0.40,
    width: AppSizes.screen.width * 0.48,
    borderRadius: 5,
    marginTop: 7,
    marginBottom: 7,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: 'center',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    height: AppSizes.screen.height * 0.25,
    width: AppSizes.screen.width * 0.40,    
  },
  label: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5
  },
  price: {
    color: AppColors.brand.primary,
    fontWeight: 'bold',
    fontSize: 18
  }
}