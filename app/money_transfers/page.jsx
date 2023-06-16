import MoneyCarusel from '@/components/MoneyTransfers/MoneyCarusel/MoneyCarusel';
import MoneyResults from '@/components/MoneyTransfers/MoneyCarusel/MoneyResults';
import MoneyCountry from '@/components/MoneyTransfers/MoneyCountry/MoneyCountry';
import MoneyFast from '@/components/MoneyTransfers/MoneyFast/MoneyFast';
import MoneyGoals from '@/components/MoneyTransfers/MoneyGoals/MoneyGoals';
import MoneyPrice from '@/components/MoneyTransfers/MoneyPrice/MoneyPrice';
import MoneyReady from '@/components/MoneyTransfers/MoneyReady/MoneyReady';
import MoneyTransfersBottomHeader from '@/components/MoneyTransfers/MoneyTransfersBottomHeader/MoneyTransfersBottomHeader';
import MoneyTransfersHeader from '@/components/MoneyTransfers/MoneyTransfersHeader/MoneyTransfersHeader';

export default function page() {
  return (
    <>
      <MoneyTransfersHeader />
      <MoneyTransfersBottomHeader/>
      <MoneyFast/>
      <MoneyGoals/>
      <MoneyTransfersBottomHeader/>
      <MoneyCountry/>
      <MoneyResults/>
      <MoneyPrice/>
      <MoneyReady/>
    </>
  )
}
