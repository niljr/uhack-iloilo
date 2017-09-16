import { AppColors, AppSizes, AppStyles } from '@theme/';

export default {
  container: {
    borderBottomColor: 'lightgray', 
    borderBottomWidth: 1, 
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    flexDirection: 'row'
  },
  total: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 15
  },
  price: {
    color: AppColors.brand.primary,
    fontSize: 20,
    fontWeight: 'bold'
  }
}