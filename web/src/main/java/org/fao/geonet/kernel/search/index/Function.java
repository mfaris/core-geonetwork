package org.fao.geonet.kernel.search.index;

import java.io.IOException;

import org.apache.lucene.index.CorruptIndexException;
import org.apache.lucene.search.NRTManager.TrackingIndexWriter;

public interface Function {
    public void apply(TrackingIndexWriter input) throws CorruptIndexException, IOException;
}
