import rus from '@/public/russianflag.svg'
import azer from '@/public/azerflag.svg'
import kz from '@/public/kzflag.svg'
import arm from '@/public/armeniaflag.svg'
import tj from '@/public/tjflag.svg'

export const MoneyCountryLink = [
    { id: 1, text: 'Все' },
    { id: 2, text: 'СНГ' },
    { id: 3, text: 'Европа' },
]
export const MoneyCountryListLink = [
    {
        id: 1, content: [
            { img: rus, text: 'Россия' },
            { img: azer, text: 'Азербайджан' },
            { img: kz, text: 'Казахстан' },
            { img: arm, text: 'Армения' },
            { img: tj, text: 'Таджикистан' },
        ]
    },
    {
        id: 2, content: [
            { img: azer, text: 'Азербайджан' },
            { img: rus, text: 'Россия' },
            { img: kz, text: 'Казахстан' },
            { img: arm, text: 'Армения' },
            { img: tj, text: 'Таджикистан' },
        ]
    },
    {
        id: 3, content: [
            { img: azer, text: 'Азербайджан' },
            { img: kz, text: 'Казахстан' },
            { img: rus, text: 'Россия' },
            { img: arm, text: 'Армения' },
            { img: tj, text: 'Таджикистан' },
        ]
    }
]