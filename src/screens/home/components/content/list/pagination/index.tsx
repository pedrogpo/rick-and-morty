import * as S from './styles'
import { BiLoaderAlt } from 'react-icons/bi'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (pageNumber: number) => void
  pageLoading?: number | null
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  pageLoading,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const pageNumbers = []
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      pageNumbers.push(1)
      if (currentPage > 2) {
        pageNumbers.push('...')
      }
      for (
        let i = Math.max(currentPage - 2, 2);
        i <= Math.min(currentPage + 2, totalPages - 1);
        i++
      ) {
        pageNumbers.push(i)
      }
      if (currentPage < totalPages - 1) {
        pageNumbers.push('...')
      }
      pageNumbers.push(totalPages)
    }
    return pageNumbers
  }

  const pageNumbers = getPageNumbers()

  return (
    <S.PaginationContainer>
      {pageNumbers.map((pageNumber, index) => {
        if (typeof pageNumber === 'string') {
          return <span key={index}>...</span>
        }

        const isLoading = pageLoading === pageNumber
        const isActive = pageNumber === currentPage

        return isLoading ? (
          <S.LoadingButton key={index}>
            <BiLoaderAlt size={16} />
          </S.LoadingButton>
        ) : (
          <S.PaginationButton
            key={index}
            pageLoading={pageLoading !== null}
            active={isActive}
            disabled={isLoading || isActive}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </S.PaginationButton>
        )
      })}
    </S.PaginationContainer>
  )
}
