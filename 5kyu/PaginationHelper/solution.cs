using System;
using System.Collections.Generic;

public class PaginationHelper<T>
{
    private IList<T> _collection;
    private int _itemsPerPage;

    public PaginationHelper(IList<T> collection, int itemsPerPage)
    {
        _collection = collection;
        _itemsPerPage = itemsPerPage;
    }

    public int ItemCount
    {
        get { return _collection.Count; }
    }

    public int PageCount
    {
        get { return (ItemCount + _itemsPerPage - 1) / _itemsPerPage; }
    }

    public int PageItemCount(int pageIndex)
    {
        if (pageIndex < 0 || pageIndex >= PageCount)
            return -1;
        
        if (pageIndex == PageCount - 1)
            return ItemCount % _itemsPerPage == 0 ? _itemsPerPage : ItemCount % _itemsPerPage;
        
        return _itemsPerPage;
    }

    public int PageIndex(int itemIndex)
    {
        if (itemIndex < 0 || itemIndex >= ItemCount)
            return -1;
        
        return itemIndex / _itemsPerPage;
    }
}
